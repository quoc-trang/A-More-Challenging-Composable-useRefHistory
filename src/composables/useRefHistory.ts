import { computed, ref, watch, type Ref } from "vue";

interface History {
  value: string;
  timestamp: number;
}

export const useRefHistory = (theme: Ref<string>, capacity: Ref<number>) => {
  const history = ref<History[]>([]);
  const redoState = ref<string[]>([]);

  const canUndo = computed(() => history.value.length > 0);
  const canRedo = computed(() => redoState.value.length > 0);

  watch(theme, (_, oldTheme) => {
    if (history.value.length >= capacity.value) return;

    console.log(theme.value);
    history.value.unshift({
      value: oldTheme,
      timestamp: new Date().getTime(),
    });
  });

  watch(capacity, () => {
    if (capacity.value < history.value.length) {
      history.value = history.value.slice(0, capacity.value);
    }
  });

  function undo() {
    if (!canUndo.value) return;

    redoState.value.unshift(history.value[0].value);
    history.value.splice(0, 1);
  }

  function redo() {
    if (!canRedo.value) return;

    history.value.unshift({
      value: redoState.value[0],
      timestamp: new Date().getTime(),
    });

    redoState.value.splice(0, 1);
  }

  return {
    undo,
    redo,
    history,
    canUndo,
    canRedo,
  };
};

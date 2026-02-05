import { onMounted, ref } from "vue";

export function useMotionSafe() {
  const motionSafe = ref(true);

  onMounted(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionSafe.value = !media.matches;
  });

  return { motionSafe };
}


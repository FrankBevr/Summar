<script setup lang="ts">
import { ref } from "vue";
import { useAnimations, useGLTF } from "@tresjs/cientos";
import { useLoader } from "@tresjs/core";

const url = "/sketo.glb";
const { scene: model, animations } = await useGLTF(url);
model.crossOrigin = "";
const { actions } = useAnimations(animations, model);

const currentAction = ref(actions.Walk);
currentAction.value.play();
</script>

<template>
  <Suspense>
    <primitive :object="model" position-y="-2.5" scale="0.5" rotate-y="135" />
  </Suspense>
</template>

<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import { BasicShadowMap, SRGBColorSpace, NoToneMapping } from "three";
import UgglyBunny from "@/components/UgglyBunny.vue";

const gl = {
  clearColor: "#F78B3D",
  shadows: true,
  alpha: false,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
  windowSize: true,
};
</script>
<template>
  <Suspense>
    <TresCanvas v-bind="gl">
      <TresPerspectiveCamera :position="[2, 2, 9]" :look-at="[0, 2, 0]" />
      <OrbitControls />
      <Suspense>
        <UgglyBunny />
      </Suspense>
      <TresAmbientLight />
    </TresCanvas>
  </Suspense>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  height: 100%;
  width: 100%;
}
</style>

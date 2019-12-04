<template>
  <div>
    <canvas ref="gameField"></canvas>
  </div>
</template>

<script>
import Game from "../js/game";

export default {
  mounted() {
    const canvas = this.$refs.gameField;
    const game = new Game(canvas);
    game.start();
  }
};
</script>

<style scoped>
canvas{
    border: 1px solid black
}
</style>

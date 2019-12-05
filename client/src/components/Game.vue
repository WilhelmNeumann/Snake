<template>
  <div>
    <canvas ref="gameField"></canvas>
  </div>
</template>

<script>
import Game from "../js/game";
import ApiService from "../js/apiService";

const options = {
  url: "http://localhost:8081/"
};

export default {
  async mounted() {
    ApiService.baseUrl = options.url
    const config = await ApiService.getConfig();

    // eslint-disable-next-line no-console
    console.log(JSON.stringify(config))
    const canvas = this.$refs.gameField;
    const game = new Game(canvas, config);
    game.start();
  }
};
</script>

<style scoped>
canvas {
  border: 1px solid black;
}
</style>

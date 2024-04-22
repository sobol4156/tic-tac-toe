<template>
  <div class="game-board">
    <div v-if="winnerGame">
      <h2>Победили {{ winnerGame }}</h2>
    </div>
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="board-row">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="board-square"
        @click="handleClick(rowIndex, colIndex)"
      >
        {{ cell === "X" ? "X" : cell === "O" ? "O" : "" }}
      </div>
    </div>
    <div v-if="winnerGame" class="btn-winner">
      <button @click="backToStart" class="btn-menu">
        Вернуться в главное меню
      </button>
      <button @click="restartGame" class="btn-replay">Сыграть ещё раз</button>
    </div>
  </div>
</template>

<script>
import router from "@/routes/router";

export default {
  name: "Game",
  data() {
    return {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      user1: true,
      winnerGame: null,
    };
  },
  methods: {
    handleClick(rowIndex, colIndex) {
      console.log(this.board);
      // проверка клетки
      if (!this.board[rowIndex][colIndex]) {
        // делаем ход
        this.board[rowIndex][colIndex] = this.user1 ? "X" : "O";

        this.user1 = !this.user1;

        const winner = this.checkWin();
        if (winner) {
          this.winnerGame = winner;
        }
      }
    },
    checkWin() {
      const lines = [
        // Горизонтальные линии
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Вертикальные линии
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Диагонали
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.board[Math.floor(a / 3)][a % 3] &&
          this.board[Math.floor(a / 3)][a % 3] ===
            this.board[Math.floor(b / 3)][b % 3] &&
          this.board[Math.floor(a / 3)][a % 3] ===
            this.board[Math.floor(c / 3)][c % 3]
        ) {
          return this.board[Math.floor(a / 3)][a % 3];
        }
      }

      return null;
    },
    backToStart() {
      this.$router.push("/");
    },
    restartGame() {
      this.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
      this.winnerGame = null;
    },
  },
};
</script>

<style scoped>
.game-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.board-row {
  display: flex;
}

.board-square {
  background-color: rgb(175, 169, 169);
  width: 150px;
  height: 150px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 1px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 96px; /* размер крестиков и ноликов */
  cursor: pointer;
}

/* Кнопки после победы */
.btn-winner {
  margin: 30px;
  display: flex;
  gap: 30px;
}
.btn-menu,
.btn-replay {
  padding: 10px 20px;
  background-color: #ca931c;
  border: none;
  color: white;
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.btn-menu:hover,
.btn-replay:hover {
  background-color: #a0771f;
}
</style>

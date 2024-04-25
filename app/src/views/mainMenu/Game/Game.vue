<template>
  <div class="game-board">
    <!-- Логика победы или ничьи -->
    <div v-if="winnerGame === 'X' || winnerGame=== 'O'">
      <h2>Победили {{ winnerGame }}</h2>
    </div>
    <div v-if="winnerGame === 'Ничья'">
      <h2>{{ winnerGame }}</h2> 
    </div>
    <!-- Рендер игрового поля -->
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="board-row flex">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="board-square"
        @click="handleClick(rowIndex, colIndex)"
      >
        {{ cell === "X" ? "X" : cell === "O" ? "O" : "" }}
      </div>
    </div>
    <!-- Кнопки возврата в меню или restart -->
    <div v-if="winnerGame" class="btn-winner">
      <ButtonBack @click="backToStart" :class="{'gameButtonBack': true}">
       Главное меню
      </ButtonBack>
      <ButtonRestart @click="restartGame"  :class="{'gameButtonBack': true}">Сыграть ещё раз</ButtonRestart>
    </div>
  </div>
</template>

<script>
import ButtonBack from '@/shared/UI/ButtonBack.vue';
import ButtonRestart from '@/shared/UI/ButtonRestart.vue';

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
  components:{
    ButtonBack,
    ButtonRestart
  },
  methods: {
    handleClick(rowIndex, colIndex) {
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
      // Проверка победы
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
      // Проверка пустых клеток
  let emptyCells = 0;
  for (let row of this.board) {
    for (let cell of row) {
      if (cell === "") {
        emptyCells++;
      }
    }
  }
  if (emptyCells === 0) {
    return "Ничья";
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


/* Адаптивка под размерность поля и расположения кнопок */
@media(width < 480px){
  .board-square{
    width: 100px;
  height: 100px;
  font-size: 64px;
  }
  .btn-winner{
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
}

@media(width < 330px){
  .board-square{
    width: 60px;
  height: 60px;
  font-size: 48px;
  }
  .btn-winner{
    display: flex;
    flex-direction: column-reverse;
    gap: 10px;
  }
}
</style>

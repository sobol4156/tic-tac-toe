<template>
    <div class="game-board">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="board-row">
        <div
          v-for="(cell, colIndex) in row"
          :key="colIndex"
          class="board-square"
          @click="handleClick(rowIndex, colIndex)"
        >
          {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'Game',
    data() {
      return {
        
        board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
        user1: true 
      };
    },
    methods: {
      handleClick(rowIndex, colIndex) {
        console.log(this.board)
        // проверка клетки
        if (!this.board[rowIndex][colIndex]) {
          // делаем ход
          this.board[rowIndex][colIndex] = this.user1 ? 'X' : 'O';
          
          this.user1 = !this.user1;
        }
      }
    }
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
  </style>
  
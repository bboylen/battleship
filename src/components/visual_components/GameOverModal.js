import "../../styles/GameOverModal.css";

const GameOverModal = (props) => {
  return (
    <div id="game-over-modal">
      <div class="modal-content">
        <p>{props.victoryMessage}</p>
        <button id="restart-game-btn" onClick={props.handleRestartGame}>
          Play Again?
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;

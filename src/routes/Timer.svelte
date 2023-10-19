<script>
  export let seconds
  const originalSeconds = seconds

  function handleClick() {
    if (seconds <= 0) {
      seconds = originalSeconds
    }

    const intervalId = setInterval(() => {
      if (seconds <= 0) {
        clearInterval(intervalId)
      } else {
        seconds = seconds - 1
      }
    }, 1000)
  }
</script>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    font-size: 60px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
</style>

<div>
  <button on:click={handleClick}>{seconds}</button>
</div>

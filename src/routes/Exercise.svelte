<script>
  import Timer from './Timer.svelte'

  export let name
  export let reps
  export let sets
  export let secondsPerRep
  export let description

  let isDone = false

  function handleMarkDone() {
    isDone = !isDone
  }
</script>

<style>
  section {
    display: flex;
    margin-bottom: 16px;
    padding: 16px 16px 0 16px;
    background-color: #ececec;
    border-radius: 10px;
  }

  .is-done {
    opacity: 0.5;
  }

  input {
    margin-top: 8px;
    margin-right: 16px;
    transform: scale(1.25);
  }

  .body {
    flex-grow: 1;
  }

  .timer {
    width: 100px;
  }
</style>

<section class:is-done={isDone}>
  <div>
    <input type="checkbox" on:click={handleMarkDone} />
  </div>
  <div class="body">
    <h2>{name}</h2>
    <p>
      {reps} reps{#if sets}, {sets} sets{/if}
    </p>
    <p>{description}</p>
  </div>
  <div class="timer">
    <Timer seconds={reps * secondsPerRep} />
  </div>
</section>

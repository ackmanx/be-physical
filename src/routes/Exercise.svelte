<script>
    export let name
    export let reps
    export let sets
    export let description
</script>

<style>
  section {
    display: flex;
  }

  input {
    margin-top: 8px;
    margin-right: 16px;
    transform: scale(1.25);
  }
</style>

<section>
    <div>
        <input type="checkbox" />
    </div>
    <div>
        <h2>{name}</h2>
        <p>{reps} reps, {sets} sets</p>
        <p>{description}</p>
    </div>
</section>

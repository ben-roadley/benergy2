<template>
  <div class="home-page">
    <h1>Ben's 10-Minute Evening Stretch Routine</h1>

    <div>
    <h2>The Routine</h2>

    <table class="routine-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Stretch</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><b>Kneeling hip flexor stretch</b></td>
          <td>45s</td>
        </tr>
        <tr>
          <td>2</td>
          <td><b>Figure-4 glute stretch</b></td>
          <td>45s</td>
        </tr>
        <tr>
          <td>3</td>
          <td><b>Supine hamstring stretch</b></td>
          <td>45s</td>
        </tr>
        <tr>
          <td>4</td>
          <td><b>Thoracic rotation</b></td>
          <td>30s</td>
        </tr>
        <tr>
          <td>5</td>
          <td><b>Doorway chest opener</b></td>
          <td>45s</td>
        </tr>
        <tr>
          <td>6</td>
          <td><b>Child's pose</b></td>
          <td>60s</td>
        </tr>
        <tr>
          <td>7</td>
          <td><b>Standing calf stretch</b></td>
          <td>30s</td>
        </tr>
      </tbody>
    </table>
    </div>

    <div style="margin-top: 3rem;">
    <p><span><b>Equipment needed:</b> Yoga mat.</span>  </p>
    <p><span><b>When:</b> Non-workout evenings (or post-workout if time allows). Best at a consistent time — e.g. after dinner, before bed.</span></p>
</div>


<div style="margin-top:4rem">

    <h2>The Routine Details</h2>

    <table class="routine-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Stretch</th>
          <th>Duration</th>
          <th>Why it's in here</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td><b>Kneeling hip flexor stretch</b> (low lunge)</td>
          <td>45s each side</td>
          <td>Top priority for desk workers. Tight hip flexors = anterior pelvic tilt = back pain on the bike and reduced glute activation in workouts</td>
        </tr>
        <tr>
          <td>2</td>
          <td><b>Figure-4 glute stretch</b> (lying on back)</td>
          <td>45s each side</td>
          <td>Glutes are heavily loaded in both Workout A and B. Also targets piriformis — common pain point for cyclists</td>
        </tr>
        <tr>
          <td>3</td>
          <td><b>Supine hamstring stretch</b> (band around foot, or grab the leg)</td>
          <td>45s each side</td>
          <td>Sitting all day shortens hamstrings. Tight hamstrings → limited hip hinge depth on deadlifts and posterior tilt on the bike</td>
        </tr>
        <tr>
          <td>4</td>
          <td><b>Thoracic rotation</b> (lying on side, knees stacked, top arm opens to ceiling)</td>
          <td>30s each side</td>
          <td>Undoes desk-hunching. Improves riding posture and breathing capacity on climbs</td>
        </tr>
        <tr>
          <td>5</td>
          <td><b>Doorway chest opener</b> (arms at 90°, lean gently forward)</td>
          <td>45s</td>
          <td>Counteracts forward-shoulder posture from desk work and handlebar grip. Complements face pulls from Workout B</td>
        </tr>
        <tr>
          <td>6</td>
          <td><b>Child's pose</b></td>
          <td>60s</td>
          <td>Lats, lower back decompression, hip flexors. Full reset after a day of sitting</td>
        </tr>
        <tr>
          <td>7</td>
          <td><b>Standing calf stretch</b> (heel drop off a step, or wall lean)</td>
          <td>30s each side</td>
          <td>4 sets of calf raises need consistent stretching. Also important for ankle mobility in MTB descending</td>
        </tr>
      </tbody>
    </table>
    </div>

    <h2>Notes</h2>

    <ul class="tips-list">
      <li><b>Hip flexors are the priority.</b> If you only have 5 minutes, do #1.</li>
      <li><b>Don't rush the thoracic rotation (#4).</b> Most commonly skipped; biggest MTB payoff.</li>
      <li><b>Hold static — don't bounce.</b> This is a recovery/mobility session, not a warmup.</li>
      <li>On <b>Workout A days</b>, focus on #2 and #3 (posterior chain takes the most load).</li>
      <li>On <b>Workout B days</b>, focus on #1 (Bulgarian split squats stress hip flexors hard).</li>
      <li>Aim for 3–5 evenings per week for noticeable MTB and posture improvement within a month.</li>
    </ul>

    <p><i>Suggested by Sports Expert agent, May 2026. Based on Ben's A/B training split and profile.</i></p>


  </div>
</template>

<script setup>

</script>

<style scoped>
.home-page {
  padding: 1rem;
  min-height: calc(100vh - 4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
}

.resume-banner {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #facc15;
  background-color: #fefce8;
  color: #713f12;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.resume-workout-name {
  font-weight: 600;
}

.resume-actions {
  display: flex;
  gap: 0.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  text-align: center;
}

.loading-text {
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  max-width: 28rem;
}

.empty-text {
  color: var(--p-surface-500);
  font-size: 1.125rem;
}

.workout-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 28rem;
  width: 100%;
}

.workout-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.workout-item-row {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.workout-btn {
  flex: 1;
  text-align: left;
}

.create-workout-link {
  margin-top: 0.5rem;
}

.stagnation-warning {
  color: #ea580c;
  font-weight: 500;
  padding-left: 0.25rem;
}

.stagnation-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.stagnation-help-btn {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: #f97316;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  border: none;
}

.stagnation-help-btn:hover {
  background-color: #ea580c;
}

.tips-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style-type: disc;
  padding-left: 1.25rem;
  font-size: 0.875rem;
}
</style>

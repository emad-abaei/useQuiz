interface ProgressProps {
  index: number;
  questionsCount: number;
  currentPoints: number;
  totalPoints: number;
  answer: number | null;
}

function Progress({
  index,
  questionsCount,
  currentPoints,
  totalPoints,
  answer
}: ProgressProps) {
  return (
    <header className='progress'>
      <progress
        max={questionsCount}
        value={answer !== null ? index + 1 : index}
      />

      <p>
        Qestion <strong>{index + 1}</strong> / {questionsCount}
      </p>

      <p>
        Score <strong>{currentPoints}</strong> / {totalPoints}
      </p>
    </header>
  );
}

export default Progress;

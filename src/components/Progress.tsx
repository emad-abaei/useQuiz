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
        role='progressbar'
        max={questionsCount}
        value={answer !== null ? index + 1 : index}
        // Better accessibility
        aria-valuenow={index + 1}
        aria-valuemin={1}
        aria-valuemax={questionsCount}
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

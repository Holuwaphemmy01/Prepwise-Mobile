export function headerTopForHeight(height: number) {
  const compact = height <= 820;
  const tiny = height <= 700;
  if (tiny) return 28;
  if (compact) return 36;
  return 48;
}


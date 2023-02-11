type Output = "No two snowflakes are alike." | "Twin snowflakes found.";

export function identify_identical(values: Array<number>, n: number): Output {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (values[i] == values[j]) {
        return "Twin snowflakes found.";
      }
    }
  }
  return "No two snowflakes are alike.";
}

export function identical_right(
  s1: Array<number>,
  s2: Array<number>,
  i: number
): number {
  for (let offset = 0; offset < 6; offset++) {
    let s2Index = i + offset;
    if (s2Index > 6) {
      s2Index = s2Index - 6;
      if (s1[offset] !== s2[s2Index]) {
        return 0;
      }
    }
  }
  return 1;
}

export function identical_left(
  s1: Array<number>,
  s2: Array<number>,
  i: number
) {
  for (let offset = 0; offset < 6; offset++) {
    let s2Index = i - offset;
    if (s2Index < 0) {
      s2Index = s2Index + 6;
      if (s1[offset] !== s2[s2Index]) {
        return 0;
      }
    }
  }
  return 1;
}

function recursiva(maxValue) {
    console.log(maxValue);
    if (maxValue >= 1000) return;

    maxValue++;
    recursiva(maxValue);
}

recursiva(0);

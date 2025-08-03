import { ISample } from "./ISample";

// Step 1: Define the strategy interface
interface SortingStrategy {
  sort(array: number[]): number[];
  getName(): string;
}

// Step 2: Implement concrete strategies

// Bubble Sort: O(n²) time complexity
class BubbleSort implements SortingStrategy {
  sort(array: number[]): number[] {
    console.time("BubbleSort");
    const result = [...array];
    const n = result.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          // Swap elements
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }

    console.timeEnd("BubbleSort");
    return result;
  }

  getName(): string {
    return "Bubble Sort";
  }
}

// Merge Sort: O(n log n) time complexity
class MergeSort implements SortingStrategy {
  sort(array: number[]): number[] {
    console.time("MergeSort");
    const result = this.mergeSort([...array]);
    console.timeEnd("MergeSort");
    return result;
  }

  private mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  private merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  getName(): string {
    return "Merge Sort";
  }
}

// Quick Sort: O(n log n) average time complexity, O(n²) worst case
class QuickSort implements SortingStrategy {
  sort(array: number[]): number[] {
    console.time("QuickSort");
    const result = [...array];
    this.quickSort(result, 0, result.length - 1);
    console.timeEnd("QuickSort");
    return result;
  }

  private quickSort(array: number[], low: number, high: number): void {
    if (low < high) {
      const pivotIndex = this.partition(array, low, high);
      this.quickSort(array, low, pivotIndex - 1);
      this.quickSort(array, pivotIndex + 1, high);
    }
  }

  private partition(array: number[], low: number, high: number): number {
    const pivot = array[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }

  getName(): string {
    return "Quick Sort";
  }
}

// Step 3: Create the context class
class Sorter {
  private strategy: SortingStrategy;

  constructor(strategy: SortingStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  sort(array: number[]): number[] {
    return this.strategy.sort(array);
  }

  getStrategyName(): string {
    return this.strategy.getName();
  }
}

export class SortingSample implements ISample {
  getName(): string {
    return "Sorting Sample";
  }

  run(): string {
    const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
    console.log("Original array:", arrayToSort);

    // Create strategies
    const bubbleSort = new BubbleSort();
    const mergeSort = new MergeSort();
    const quickSort = new QuickSort();

    // Create sorter with initial strategy
    const sorter = new Sorter(bubbleSort);

    // Sort with Bubble Sort
    console.log(`\nSorting with ${sorter.getStrategyName()}:`);
    const bubbleSorted = sorter.sort(arrayToSort);
    console.log("Result:", bubbleSorted);

    // Change strategy to Merge Sort and sort
    sorter.setStrategy(mergeSort);
    console.log(`\nSorting with ${sorter.getStrategyName()}:`);
    const mergeSorted = sorter.sort(arrayToSort);
    console.log("Result:", mergeSorted);

    // Change strategy to Quick Sort and sort
    sorter.setStrategy(quickSort);
    console.log(`\nSorting with ${sorter.getStrategyName()}:`);
    const quickSorted = sorter.sort(arrayToSort);
    console.log("Result:", quickSorted);

    return `Sorting Sample invoked`;
  }
}

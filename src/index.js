module.exports = function solveSudoku(matrix) {
    for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            let currentProcessingValue = matrix[rowIndex][columnIndex];
            if (currentProcessingValue === 0) {
                let occurredValues = new Set();
                for (let i = 0; i < 9; i++) {
                    let rowValue = matrix[rowIndex][i];
                    if (rowValue !== 0) {
                        occurredValues.add(rowValue);
                    }
                }
                for (let i = 0; i < 9; i++) {
                    let columnValue = matrix[i][columnIndex];
                    if (columnValue !== 0) {
                        occurredValues.add(columnValue);
                    }
                }
                for (let boxRow = Math.floor(rowIndex / 3) * 3; boxRow < Math.floor(rowIndex / 3) * 3 + 3; boxRow++) {
                    for (let boxColumn = Math.floor(columnIndex / 3) * 3; boxColumn < Math.floor(columnIndex / 3) * 3 + 3; boxColumn++) {
                        let boxValue = matrix[boxRow][boxColumn];
                        if (boxValue !== 0) {
                            occurredValues.add(boxValue);
                        }
                    }
                }
                if (occurredValues.size === 8) {
                    for (let i = 1; i <= 9; i++) {
                        if (!occurredValues.has(i)) {
                            matrix[rowIndex][columnIndex] = i;
                        }
                    }
                }
            }
        }
    }
    return matrix;
};



// // Sudoku Solver
// // Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. If so, the function will returns true. Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.

// // In sudoku, the objective is to fill a 9x9 board with digits so that each column, each row, and each of the nine 3x3 sub-boards that compose the board contains all of the digits from 1 to 9. The board setter provides a partially completed board, which for a well-posed board has a unique solution. As explained above, for this problem, it suffices to calculate whether a given sudoku board has a solution. No need to return the actual numbers that make up a solution.

// // A sudoku board is represented as a two-dimensional 9x9 array of the characters ‘1’,‘2’,…,‘9’ and the '.' character, which represents a blank space. The function should fill the blank spaces with characters such that the following rules apply:

// // In every row of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
// // In every column of the array, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
// // In every 3x3 sub-board that is illustrated below, all characters ‘1’,‘2’,…,‘9’ appear exactly once.
// // A solved sudoku is a board with no blank spaces, i.e. all blank spaces are filled with characters that abide to the constraints above. If the function succeeds in solving the sudoku board, it’ll return true (false, otherwise).

// // Example (more examples can be found here):

// // altA typical Sudoku board setter

// // altThe same board with solution numbers marked in red

// // Write a readable an efficient code, explain how it is built and why you chose to build it that way.


// // solution
// # A helper function that returns a set of all valid
// # candidates for a given cell in the board

// function getCandidates(board, row, col):
//     # For some empty cell board[row][col], what possible
//     # characters can be placed into this cell
//     # that aren't already placed in the same row,
//     # column, and sub-board?
 
//     # At the beginning, we don't have any candidates
//     candidates = []
    
//     # For each character add it to the candidate list
//     # only if there's no collision, i.e. that character 
//     # doesn't already exist in the same row, column 
//     # and sub-board. Notice the top-left corner of (row, col)'s 
//     # sub-board is (row - row%3, col - col%3).
//     for chr from '1' to '9':
//         collision = false;
//         for i from 0 to 8:
//             if (board[row][i] == chr || 
//                 board[i][col] == chr ||
//                 board[(row - row % 3) + floor(i / 3)][(col - col % 3) + i % 3] == chr):
//                     collision = true
//                     break
                  
//         if (!collision):
//             candidates.push(chr)
         
//     return candidates
 
// function sudokuSolve(board):
//     # For each empty cell, consider 'newCandidates', the
//     # set of possible candidate values that can
//     # be placed into that cell.
   
//     row = -1 
//     col = -1
//     candidates = null 
    
//     for r from 0 to 8:
//         for c from 0 to 8:
//             if (board[r][c] == '.'):
//                 newCandidates = getCandidates(board, r, c)
//                 # Then, we want to keep the smallest
//                 # sized 'newCandidates', plus remember the
//                 # position where it was found
//                 if (candidates == null OR newCandidates.size() < candidates.size()):
//                     candidates = newCandidates
//                     row = r 
//                     col = c
 
//     # If we have not found any empty cell, then
//     # the whole board is filled already
//     if (candidates == null):
//         return true
 
//     # For each possible value that can be placed
//     # in position (row, col), let's
//     # place that value and then recursively query
//     # whether the board can be solved.  If it can,
//     # we are done. 
//     for val in candidates:
//         board[row][col] = val
//         if (sudokuSolve(board)):
//             return true
//         # The tried value val didn't work so restore  
//         # the (row, col) cell back to '.'
//         board[row][col] = '.'
 
//     # Otherwise, there is no value that can be placed
//     # into position (row, col) to make the
//     # board solved
//     return false
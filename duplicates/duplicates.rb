def inter_binary(arr, tartget) 
  #o(1) - space complexity 
  #o(logn) - time complexity   
  start_i = 0
  end_i = arr.length - 1
  mid_i = arr.length /2

  until start_i == end_i
    case target <=> arr[mid_i]
    when -1 
      #checking the left
      end_i = mid_i
      mid_i = (start_i + end_i) /2
    when 0
      return mid_i
    when 1
      start_i = mid_i
      mid_i = (start_i + end_i) /2
    end
  end
end

arr1 = [1, 2, 3, 4, 5, 6]
arr2 = [3, 5, 7, 8]

inter_binary(arr1, 5)
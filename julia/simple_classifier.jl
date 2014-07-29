
include("load_dataset.jl");

function absolute_standard_deviation(vector)
  sum = 0
  med = median(vector)
  for value in vector
    sum += abs(value - med)
  end
  return sum / length(vector)
end

function manhattan(vector1, vector2)
  return sum(abs(vector1 - vector2)) 
end

function normalize_column(column_number, training_set)
  column_vector = Float64[float(td[2][column_number]) for td in training_set]
  normalized_column = Float64[]
  column_median = median(column_vector)
  column_std = absolute_standard_deviation(column_vector)
  for value in column_vector
    push!(normalized_column, (value - column_median) / column_std) 
  end
  return normalized_column, (column_median, column_std)
end

function normalize_vector(vector, training_set)
  normalized_vector = Float64[]
  for i in 1:length(vector)
    normalized_column, column_mean_std = normalize_column(i, training_set)
    push!(normalized_vector, (vector[i] - column_mean_std[1]) / column_mean_std[2])
  end
  return normalized_vector
end

function normalize_training_set(training_set)
  normalized_training_set = deepcopy(training_set)
  normalized_columns = Array{Float64}[]
  data_length = length(training_set[1][2])

  for i in 1:data_length
    normalized_column, column_mean_std = normalize_column(i, training_set)
    push!(normalized_columns, normalized_column)
  end

  for i in 1:length(normalized_training_set)
    for j in 1:length(normalized_training_set[i][2])
      normalized_training_set[i][2][j] = normalized_columns[j][i]
    end
  end

  return normalized_training_set
end

function nearest_neighbour(data, training_set)
  return [(manhattan(data, item[2]), item) for item in training_set]
end

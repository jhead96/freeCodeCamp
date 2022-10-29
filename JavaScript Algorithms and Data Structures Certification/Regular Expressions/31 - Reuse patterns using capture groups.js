// Capture groups can match repeated patterns in a string
// For example "(\w+)" will match "row row row" in "row row row your boat"
// When used in .match(), they return any matched groups and the matched pattern
// The capture groups are referred to as "\1" in the regex, where the capture groups are numbered in the order they appear

// Regex to match repeating groups of 3 identical numbers
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; 
let result = reRegex.test(repeatNum);
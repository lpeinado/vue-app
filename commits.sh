#!/bin/bash

# Set global variables
TEXT="This is a random text line."
COMMIT_MESSAGE="Add random file with single line of text"
COMMIT_DATE="2023-03-15T12:00:00"  # Use full ISO 8601 date-time format
REPO_PATH="."  # Change this to your repository path

# Function to create a new file with a random name and single line of text
create_random_file() {
    local random_name; random_name=$(cat /dev/urandom | tr -cd 'a-f0-9' | head -c 16)
    local file_name="${REPO_PATH}/randomfile_${random_name}.txt"
    printf "%s\n" "$TEXT" > "$file_name"
    printf "%s\n" "$file_name"  # Output the file name
}

# Function to sanitize and validate the commit date
validate_commit_date() {
    local date_to_validate; date_to_validate=$(date -j -f "%Y-%m-%dT%H:%M:%S" "$COMMIT_DATE" +%s 2>/dev/null)
    if [[ -z "$date_to_validate" ]]; then
        printf "Invalid commit date\n" >&2
        return 1
    fi
}

# Function to add, commit, and push the file
commit_and_push() {
    local file_path="$1"
    cd "$REPO_PATH" || {
        printf "Failed to change directory to repository path\n" >&2
        return 1
    }
    git add "$file_path"
    GIT_AUTHOR_DATE="$COMMIT_DATE" GIT_COMMITTER_DATE="$COMMIT_DATE" git commit --date="$COMMIT_DATE" -m "$COMMIT_MESSAGE" || {
        printf "Failed to commit changes\n" >&2
        return 1
    }
    git push || {
        printf "Failed to push changes\n" >&2
        return 1
    }
}

# Main function to execute the script
main() {
    local file_path; file_path=$(create_random_file)
    if [[ -z "$file_path" ]]; then
        printf "File creation failed\n" >&2
        return 1
    fi
    if ! validate_commit_date; then
        return 1
    fi
    if ! commit_and_push "$file_path"; then
        printf "Commit process failed\n" >&2
        return 1
    fi
    printf "Changes committed and pushed successfully\n"
}

# Execute main function
main

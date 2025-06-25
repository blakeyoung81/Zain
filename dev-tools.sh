#!/bin/bash

# Robotics Portfolio Website - Development Tools
# Collection of useful commands for website development

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper function to print colored messages
print_message() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}========================================${NC}"
    echo -e "${BLUE} $1${NC}"
    echo -e "${BLUE}========================================${NC}"
}

# Check if we're in the right directory
check_directory() {
    if [[ ! -f "index.html" ]]; then
        print_error "index.html not found. Please run this script from the website root directory."
        exit 1
    fi
}

# Start the development server
start_server() {
    print_header "Starting Development Server"
    
    if command -v python3 &> /dev/null; then
        print_message "Starting server with Python 3..."
        echo "🌐 Server will be available at: http://localhost:8080"
        echo "⏹️  Press Ctrl+C to stop the server"
        python3 -m http.server 8080
    elif command -v python &> /dev/null; then
        print_message "Starting server with Python..."
        echo "🌐 Server will be available at: http://localhost:8080"
        echo "⏹️  Press Ctrl+C to stop the server"
        python -m http.server 8080
    else
        print_error "Python not found. Please install Python to run the development server."
        exit 1
    fi
}

# Clean temporary files
clean() {
    print_header "Cleaning Temporary Files"
    
    print_message "Removing temporary files..."
    find . -name ".DS_Store" -type f -delete 2>/dev/null || true
    find . -name "*.tmp" -type f -delete 2>/dev/null || true
    find . -name "*.log" -type f -delete 2>/dev/null || true
    find . -name "*~" -type f -delete 2>/dev/null || true
    
    print_message "Clean complete!"
}

# Validate HTML
validate_html() {
    print_header "Validating HTML"
    
    if [[ ! -f "index.html" ]]; then
        print_error "index.html not found!"
        exit 1
    fi
    
    print_message "Checking HTML syntax..."
    # Basic validation - check for common issues
    if grep -q "<!DOCTYPE html>" index.html; then
        print_message "✅ DOCTYPE declaration found"
    else
        print_warning "⚠️  DOCTYPE declaration missing"
    fi
    
    if grep -q "<html lang=" index.html; then
        print_message "✅ Language attribute found"
    else
        print_warning "⚠️  Language attribute missing"
    fi
    
    if grep -q "<meta.*charset=" index.html; then
        print_message "✅ Character encoding specified"
    else
        print_warning "⚠️  Character encoding not specified"
    fi
    
    if grep -q "<meta.*viewport=" index.html; then
        print_message "✅ Viewport meta tag found"
    else
        print_warning "⚠️  Viewport meta tag missing"
    fi
}

# Check file sizes
check_sizes() {
    print_header "File Size Analysis"
    
    print_message "Analyzing file sizes..."
    
    echo "📁 Directory sizes:"
    du -sh img/ css/ js/ vendor/ 2>/dev/null | sort -hr
    
    echo ""
    echo "📄 Large files (>1MB):"
    find . -type f -size +1M -exec ls -lh {} \; 2>/dev/null | awk '{print $5 " " $9}' | sort -hr
}

# Backup website
backup() {
    print_header "Creating Backup"
    
    BACKUP_NAME="website-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    
    print_message "Creating backup: $BACKUP_NAME"
    
    tar -czf "../$BACKUP_NAME" \
        --exclude='.git' \
        --exclude='node_modules' \
        --exclude='*.log' \
        --exclude='.DS_Store' \
        .
    
    print_message "✅ Backup created: ../$BACKUP_NAME"
}

# Show help
show_help() {
    print_header "Development Tools Help"
    
    echo "Usage: $0 [command]"
    echo ""
    echo "Available commands:"
    echo "  start     Start the development server (default)"
    echo "  clean     Remove temporary files"
    echo "  validate  Validate HTML syntax"
    echo "  sizes     Check file sizes"
    echo "  backup    Create a backup of the website"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0                # Start development server"
    echo "  $0 start          # Start development server"
    echo "  $0 clean          # Clean temporary files"
    echo "  $0 validate       # Validate HTML"
}

# Main script logic
main() {
    check_directory
    
    case "${1:-start}" in
        "start")
            start_server
            ;;
        "clean")
            clean
            ;;
        "validate")
            validate_html
            ;;
        "sizes")
            check_sizes
            ;;
        "backup")
            backup
            ;;
        "help"|"-h"|"--help")
            show_help
            ;;
        *)
            print_error "Unknown command: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# Run the main function with all arguments
main "$@" 
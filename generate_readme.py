import os
import sys
import json

def generate_toc(repo_path):
    ignore_dirs = {'.git', 'node_modules', 'dist', 'build', '__pycache__', '.idea', '.vscode'}
    ignore_files = {'README.md'}  # avoid linking README into its own TOC
    include_exts = {'.ts', '.tsx', '.js', '.jsx', '.py', '.java', '.md', '.html', '.css'}

    def to_posix(rel_path: str) -> str:
        """Convert OS-specific path to POSIX style for Markdown links."""
        return rel_path.replace(os.sep, '/')

    def scan_dir(path, base_rel=".", depth=0):
        lines = []
        indent = "  " * depth

        try:
            entries = sorted(os.listdir(path))
        except Exception:
            return lines

        # Sort: directories first, then files (both alphabetical)
        dirs = [e for e in entries if os.path.isdir(os.path.join(path, e))]
        files = [e for e in entries if os.path.isfile(os.path.join(path, e))]
        dirs.sort(key=str.lower)
        files.sort(key=str.lower)

        for entry in dirs:
            if entry in ignore_dirs or entry.startswith('.'):
                continue
            abs_p = os.path.join(path, entry)
            rel_p = to_posix(os.path.join(base_rel, entry))
            lines.append(f"{indent}- [`{entry}/`]({rel_p}/)")
            lines.extend(scan_dir(abs_p, os.path.join(base_rel, entry), depth + 1))

        for entry in files:
            if entry in ignore_files or entry.startswith('.'):
                continue
            ext = os.path.splitext(entry)[1]
            if ext not in include_exts:
                continue
            abs_p = os.path.join(path, entry)
            rel_p = to_posix(os.path.join(base_rel, entry))
            lines.append(f"{indent}- [`{entry}`]({rel_p})")

        return lines

    toc_content = "\n".join(scan_dir(repo_path))

    # Read package.json for scripts and repository URL
    usage_section = ""
    repo_url = "<repo-url>"
    package_json_path = os.path.join(repo_path, "package.json")
    if os.path.isfile(package_json_path):
        try:
            with open(package_json_path, "r", encoding="utf-8") as f:
                package_data = json.load(f)
            scripts = package_data.get("scripts", {})
            if scripts:
                usage_lines = ["```bash"]
                for name, cmd in scripts.items():
                    usage_lines.append(f"npm run {name}   # {cmd}")
                usage_lines.append("```")
                usage_section = "\n".join(usage_lines)
            repo_info = package_data.get("repository", {})
            if isinstance(repo_info, dict):
                repo_url = repo_info.get("url", repo_url)
            elif isinstance(repo_info, str):
                repo_url = repo_info
        except Exception as e:
            usage_section = f"_Could not read package.json scripts: {e}_"
    else:
        usage_section = "_No package.json found._"

    readme_content = f"""# TypescriptPG

## About

**TypescriptPG** is a lightweight, experimental playground for **TypeScript**.  
It’s designed for **learning, prototyping, and documenting** core TypeScript concepts and software design approaches through small, focused examples.

**Key areas:**
- **Design Patterns** — Implementations of patterns like Strategy, Factory, Observer, State, Singleton, and more, each in self-contained folders for quick reference.
- **Frontend Demos** — Simple browser-based examples in the `views/` directory showcasing DOM manipulation, component logic, and UI behavior.
- **Rapid Experimentation** — `index.ts` and other root-level files serve as quick “scratchpads” for testing new ideas or language features without project overhead.
- **TypeScript Setup** — Includes a configured `tsconfig.json` and `package.json` scripts to compile and run code easily.

**Goals:**
- Keep examples **clear, minimal, and reusable**.  
- Provide a personal **reference library** for design patterns and TypeScript techniques.  
- Serve as a **learning hub** for both fundamental and advanced concepts.

## Table of Contents

{toc_content or '_(No files found)_' }

## Installation

```bash
git clone {repo_url}
cd <repo-folder>
npm install
```

## Usage

{usage_section}
"""
    return readme_content


def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_readme.py <repo_path>")
        sys.exit(1)

    repo_path = os.path.abspath(sys.argv[1])  # Convert to absolute path for safety
    if not os.path.isdir(repo_path):
        print(f"Error: '{repo_path}' is not a valid directory.")
        sys.exit(1)

    readme_text = generate_toc(repo_path)
    readme_path = os.path.join(repo_path, "README.md")
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write(readme_text)
    print(f"✅ README generated at: {readme_path} with success.")


if __name__ == "__main__":
    main()

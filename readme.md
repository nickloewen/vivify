# Vivify

Take a markdown file with javascript code blocks, and create an HTML file with runnable code samples.

> pandoc in.md -o out.html --css vivify.css --variable header-includes="<script src="vivify.js"></script>"

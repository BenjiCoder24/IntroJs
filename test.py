# Creating a sample Jupyter Notebook that demonstrates embedding a p5.js sketch

notebook_content = """
{
 "cells": [
  {
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# p5.js in Jupyter Notebook\\n",
    "This notebook demonstrates how to embed a p5.js sketch in a Jupyter Notebook using HTML and JavaScript."
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "from IPython.display import HTML"
   ]
  },
  {
   "cell_type": "code",
   "execution_count": null,
   "metadata": {},
   "outputs": [],
   "source": [
    "# HTML and JavaScript code to embed the p5.js sketch\\n",
    "html_code = '''\\n",
    "<script src=\\"https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js\\"></script>\\n",
    "<div id='sketch-holder'></div>\\n",
    "<script>\\n",
    "new p5((p) => {\\n",
    "    p.setup = function() {\\n",
    "        p.createCanvas(400, 400);\\n",
    "    };\\n",
    "\\n",
    "    p.draw = function() {\\n",
    "        p.background(220);\\n",
    "        p.ellipse(p.width / 2, p.height / 2, 50, 50);\\n",
    "    };\\n",
    "}, 'sketch-holder');\\n",
    "</script>\\n",
    "'''\\n",
    "HTML(html_code)"
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "codemirror_mode": {
    "name": "ipython",
    "version": 3
   },
   "file_extension": ".py",
   "mimetype": "text/x-python",
   "name": "python",
   "nbconvert_exporter": "python",
   "pygments_lexer": "ipython3",
   "version": "3.8.5"
  }
 },
 "nbformat": 4,
 "nbformat_minor": 4
}
"""

# Writing the content to a .ipynb file
notebook_filename = './p5_js_jupyter_notebook.ipynb'
with open(notebook_filename, 'w') as notebook_file:
    notebook_file.write(notebook_content)

notebook_filename


# abba_b_gumel_website

## How to Edit:
The main portion of the website exists under ```index.html```. 

First, ```control f``` or scroll to find the section you want to change (each section is labeled).

(This general format is consistent for all other parts of the website also, so changing/updating parts will be similar)

### Biodata:
If you want to edit the Biodata section, just edit the text within the ```<p class="text-start">``` tag.
```html
<p class="text-start">
	(Your edits here!)
</p>
```

### Research:
Depending on which part of this section you'd like to edit, you can just change the text/list. 

If you'd like to edit the research introduction paragraph, edit the text under ```<p id="reasearch-introduction" class="text-start">```. 

If you'd like to edit the research questions, you can edit the list under ```<ul id="research-questions">``` like so
```html
<li>
	(Your edits here)
<li>
```

If you'd like to change the second paragraph, just edit the text under ``` <p id="research-paragraph-2" class="text-start">```.

### Awards and Honors:
If you want to add to the ```Awards & Honors``` section, and do the following:
```html
	<li>
		(Add Your Award here!)	
	</li>
```







## Steps to publish updates:
1. Open Putty on your local computer
2. Log into terpconnect by
3. Put hostname as ```terpconnect.umd.edu```
4. change directories to pub/agumel by
	```cd /pub/agumel```
5. download the files from github by 
	```git pull origin master```
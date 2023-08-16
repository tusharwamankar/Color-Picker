
# Chrome Extension

The manifest.json file contains all the necessary information required to build the Chrome extension. It is the first file the extension checks and everything is loaded from this single file.

Our manifest.json file contains the value of name, version, description, manifest_version (3 in this case, which is the latest manifest version), author, and action fields. In the action field, there's the value for default_popup which contains the path to the HTML file which is index.html 

Now, since we've also added the manifest.json file we are ready to add this project as an extension in our Chrome browser.

Now, since we've also added the manifest.json file we are ready to add this project as an extension in our Chrome browser.

For that, we need to go to Select More Tools and then choose Extensions from the browser menu.

After choosing Extensions, it redirects to the extensions page in Chrome. Make sure to enable the Developer mode here.

Once that's done, you need to click the Load unpacked button which will allow us to load our project in the Chrome extension store.

Now, the extension is available in our Chrome extension store. You can also pin the extension in the browser.

This extension works only in your browser. 


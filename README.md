Image Abstraction Layer for the FCC challenge - http://www.freecodecamp.com/challenges/basejump-image-search-abstraction-layer

Search using ~/api/latestImage/{searchforitem}[optional query using ?offset=1 to affect pagination]

Retrieve all searches using ~/latest/imagesearch/

This API modifies the google-images npm package to include -

			snippet: item.snippet,
			context: item.image.contextLink,
			
Under Client.prototype._buildResponse in index.js.
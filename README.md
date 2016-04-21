Image Abstraction Layer
=======================

https://image-abstraction-layer.herokuapp.com/

Search for images using ~/api/latestImage/{search parameter}[optional query using ?offset=NUM to affect pagination]

Retrieve all searches in order of most recent first using ~/latest/imagesearch/

This API modifies the google-images npm package to include -

			snippet: item.snippet,
			context: item.image.contextLink,
			
Under Client.prototype._buildResponse in app/lib/google-images/google-images.js

Link to this package - https://github.com/vdemedes/google-images
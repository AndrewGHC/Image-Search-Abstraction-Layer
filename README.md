Image Abstraction Layer for the FCC challenge - http://www.freecodecamp.com/challenges/basejump-image-search-abstraction-layer

This API modifies the google-images npm package to include -

			snippet: item.snippet,
			context: item.image.contextLink,
			
Under Client.prototype._buildResponse in index.js.
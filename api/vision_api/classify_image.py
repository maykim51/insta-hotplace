# Image classification using Google Vision API.
from google.cloud import vision

client = vision.ImageAnnotatorClient()
test_img_uri = 'https://scontent-icn1-1.cdninstagram.com/vp/2ee852098249dee3b2c9210abf1c6bc1/5E5D14EC/t51.2885-15/e35/75483245_164158371359365_2108372086767832726_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=101'
response = client.annotate_image({
  'image': {'source': {'image_uri': 'gs://my-test-bucket/image.jpg'}},
  'features': [{'type': vision.enums.Feature.Type.FACE_DETECTION}],
})
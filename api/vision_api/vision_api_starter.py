import io
import os

# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types
from google.cloud import storage

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "C:/Users/jeoki/OneDrive/SCC Projects/scc-hotplace/api/vision_api/VisionAPI201911-a315aae6cd37.json"


def run_quickstart():
    # Instantiates a client
    client = vision.ImageAnnotatorClient()

    # The name of the image file to annotate
    # file_name = os.path.abspath('resources/foodandpeople.jpg')
    file_name = os.path.abspath('resources/pasta.jpg')

    path = "https://scontent-icn1-1.cdninstagram.com/v/t51.2885-15/e35/72850028_561264228015028_2404891244861764826_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com&_nc_cat=104&oh=0ed91e985d40ad331d201fe97a71b060&oe=5E85DC72"
    path = "https://i2-prod.crewechronicle.co.uk/incoming/article5757061.ece/ALTERNATES/s810/RS190813Burger-010.jpg"


    if path.startswith('http') or path.startswith('gs:'):
        image = types.Image()
        image.source.image_uri = path
    
    # Loads the image into memory
    else:
        with io.open(path, 'rb') as image_file:
            content = image_file.read()
        image = types.Image(content=content)

    # # Loads the image into memory
    # with io.open(file_name, 'rb') as image_file:
    #     content = image_file.read()

    # image = types.Image(content=content)



    # Performs label detection on the image file
    response = client.label_detection(image=image)
    labels = response.label_annotations

   
    print('Labels:')
    for label in labels:
        if label == "Food":
            print("food detected!!!!")
        print(label.description)


def implicit():
    # If you don't specify credentials when constructing the client, the
    # client library will look for credentials in the environment.
    storage_client = storage.Client()

    # Make an authenticated API request
    buckets = list(storage_client.list_buckets())
    print(buckets)


if __name__ == '__main__':
    run_quickstart()
    # implicit()
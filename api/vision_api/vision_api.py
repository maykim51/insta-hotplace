import io
import os

# Imports the Google Cloud client library
from google.cloud import vision
from google.cloud.vision import types
from google.cloud import storage
from PIL import Image, ImageDraw

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = "C:/Users/jeoki/OneDrive/SCC Projects/scc-hotplace/api/vision_api/VisionAPI201911-a315aae6cd37.json"


#validate it's food image, and no human face.
def validate_image(path):
    # Instantiates a client
    client = vision.ImageAnnotatorClient()
    if not path:
        return False
    if path.startswith('http') or path.startswith('gs:'):
        image = types.Image()
        image.source.image_uri = path
    else:
        print("no image available.")
        return False

    # Face Detection
    faces = client.face_detection(image=image, max_results=1).face_annotations
    # print('Found {} face{}'.format(
    # len(faces), '' if len(faces) == 1 else 's'))
    if len(faces) >= 1:
        return False
    else: 
        # Performs label detection on the image file
        response = client.label_detection(image=image)
        labels = response.label_annotations

        list_labels = [label.description for label in labels]
        # print(list_labels)
        if "Food" in list_labels or "food" in list_labels:
            # print("food detected!")
            return True
    return False


if __name__ == '__main__':
    #test images
    ##image with a man face
    # path = "https://i2-prod.crewechronicle.co.uk/incoming/article5757061.ece/ALTERNATES/s810/RS190813Burger-010.jpg"
    ##image with only food
    path = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/428px-RedDot_Burger.jpg"
    
    print(validate_image(path))
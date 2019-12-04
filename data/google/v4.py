import io
import os

from google.cloud import vision

def detect_text(path,text_path,client):
    """Detects text in the file."""
    # client = vision.ImageAnnotatorClient()

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    # response = client.text_detection(image=image)
    response = client.text_detection(image=image)
    texts = response.text_annotations

    if len(texts) > 0:
        with open(text_path,'w',encoding='utf-8')as f:
            for text in texts:
                line_content = text.description
                vertices = (['({},{})'.format(vertex.x, vertex.y)
                            for vertex in text.bounding_poly.vertices])

                write_str = '{}   {}'.format(line_content,','.join(vertices))
                f.write(write_str)
                f.write('\n')

if __name__ == '__main__':
    image_dir = 'google_image_text'
    client = vision.ImageAnnotatorClient()
    for root,dirs,files in os.walk(image_dir):
        try:
            for file in files:
                if file.endswith('.jpg'):
                    image_path = os.path.join(root,file)
                    text_path = image_path.replace('.jpg','.txt')
                    print(image_path,text_path)
                    if os.path.exists(text_path):
                        continue
                    else:
                        detect_text(image_path,text_path,client)
        except Exception as e:
            print(e)
            continue
import os
from fpdf import FPDF

pdf = FPDF(unit='in', format='letter')

images = os.listdir("./fiducials")
pages = len(images) // 12
print("Generating {} pages with {} fiducials...".format(pages, len(images)))

def draw_marker(x_index, y_index, page, offset):
    x = x_index * 4 + 0.25
    y = y_index * 4 + 0.25
    w = 1
    h = 1
    pdf.set_line_width(0.01)
    pdf.set_fill_color(0,0,0)
    pdf.rect(x,y, 4,4)
    pdf.image(os.path.join('./fiducials', images[page*12+offset*3]), x=x, y=y+1, w=w, h=h)
    pdf.image(os.path.join('./fiducials', images[page*12+offset*3+1]), x=x, y=y+4-h, w=w, h=h)
    pdf.image(os.path.join('./fiducials', images[page*12+offset*3+2]), x=x+4-w, y=y+4-h, w=w, h=h)

for page in range(pages):
    pdf.add_page()
    draw_marker(0, 0, page, 0)
    draw_marker(1, 0, page, 1)
    draw_marker(0, 1, page, 2)
    draw_marker(1, 1, page, 3)

pdf.output("out.pdf")
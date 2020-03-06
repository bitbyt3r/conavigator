import os
from fpdf import FPDF

pdf = FPDF(unit='in', format='letter')

images = os.listdir("./fiducials")

wide = 8
high = 10
x_offset = 0.25
y_offset = 0.5
step = 1
size = 1

i = 0
for image in images:
    x = x_offset + step*(i%wide) + (step-size)/2
    y = y_offset + step*(i//wide - high*(i//(wide*high))) + (step-size)/2
    if i%(wide*high) == 0:
        pdf.add_page()
    pdf.image(os.path.join('./fiducials', image), x=x,y=y,w=size,h=size)
    i += 1

pdf.output("grid_out.pdf")
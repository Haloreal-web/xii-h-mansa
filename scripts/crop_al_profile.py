from pathlib import Path

from PIL import Image, ImageOps


SOURCE = Path("/home/ubuntu/upload/lv_0_20260826075236.jpg")
OUTPUT = Path("/home/ubuntu/webdev-static-assets/xii-h-member-al.jpg")
CROP = (170, 300, 1500, 2295)


def main() -> None:
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with Image.open(SOURCE) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = image.crop(CROP)
        image = image.resize((900, 1350), Image.Resampling.LANCZOS)
        image.save(OUTPUT, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{OUTPUT}: {image.size[0]}x{image.size[1]}")


if __name__ == "__main__":
    main()

from pathlib import Path

from PIL import Image, ImageOps


OUTPUT_DIR = Path("/home/ubuntu/webdev-static-assets")

JOBS = [
    {"source": Path("/home/ubuntu/upload/IMG-20260825-WA0026.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-01-class-blue.jpg", "crop": (0, 107, 1280, 960)},
    {"source": Path("/home/ubuntu/upload/IMG-20260820-WA0033.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-02-class-uniform.jpg", "crop": (315, 0, 3717, 2268)},
    {"source": Path("/home/ubuntu/upload/IMG-20260820-WA0017.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-03-boys-tree.jpg", "crop": (0, 650, 900, 1250)},
    {"source": Path("/home/ubuntu/upload/IMG-20260820-WA0008.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-04-boys-action.jpg", "crop": (0, 650, 900, 1250)},
    {"source": Path("/home/ubuntu/upload/1000099672.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-05-class-courtyard.jpg", "crop": (0, 133, 1600, 1200)},
    {"source": Path("/home/ubuntu/upload/1000099619.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-06-class-outdoor.jpg", "crop": (100, 200, 1600, 1200)},
    {"source": Path("/home/ubuntu/upload/1000099617.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-07-selfie.jpg", "crop": (125, 0, 1475, 900)},
    {"source": Path("/home/ubuntu/upload/1000099641.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-08-boys-culture-a.jpg", "crop": (0, 650, 900, 1250)},
    {"source": Path("/home/ubuntu/upload/1000099644.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-09-boys-culture-b.jpg", "crop": (0, 630, 900, 1230)},
    {"source": Path("/home/ubuntu/upload/1000099643.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-10-girls-culture.jpg", "crop": (125, 0, 1475, 900)},
    {"source": Path("/home/ubuntu/upload/1000099642.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-11-boys-culture-c.jpg", "crop": (125, 0, 1475, 900)},
    {"source": Path("/home/ubuntu/upload/1000099650.jpg"), "output": OUTPUT_DIR / "xii-h-gallery-12-boys-culture-d.jpg", "crop": (125, 0, 1475, 900)},
]


def export_crop(job: dict[str, object]) -> None:
    source = job["source"]
    output = job["output"]
    crop = job["crop"]
    if not isinstance(source, Path) or not isinstance(output, Path) or not isinstance(crop, tuple):
        raise TypeError("Konfigurasi crop tidak valid")

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = image.crop(crop)
        image = image.resize((1350, 900), Image.Resampling.LANCZOS)
        image.save(output, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{output.name}: {image.size[0]}x{image.size[1]}")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for job in JOBS:
        export_crop(job)


if __name__ == "__main__":
    main()

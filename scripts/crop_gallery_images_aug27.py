from pathlib import Path

from PIL import Image, ImageOps


OUTPUT_DIR = Path("/home/ubuntu/webdev-static-assets")
TARGET_SIZE = (1350, 900)

# Setiap crop dipilih untuk menempatkan kelompok dan wajah utama di bagian tengah frame 3:2.
JOBS = [
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0132.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-13-merdeka-wave.jpg",
        "crop": (318, 0, 3762, 2296),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0121.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-14-boys-classroom.jpg",
        "crop": (0, 1500, 2296, 3031),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0104.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-15-girls-stairway.jpg",
        "crop": (0, 1600, 2296, 3131),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0102.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-16-merdeka-group.jpg",
        "crop": (318, 0, 3762, 2296),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0096.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-17-girls-stairway-alt.jpg",
        "crop": (0, 1700, 2296, 3231),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0103.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-18-merdeka-portrait.jpg",
        "crop": (318, 0, 3762, 2296),
    },
    {
        "source": Path("/home/ubuntu/upload/IMG-20260827-WA0098.jpg"),
        "output": OUTPUT_DIR / "xii-h-gallery-19-boys-classroom-alt.jpg",
        "crop": (0, 1850, 2296, 3381),
    },
]


def export_crop(job: dict[str, object]) -> None:
    source = job["source"]
    output = job["output"]
    crop = job["crop"]
    if not isinstance(source, Path) or not isinstance(output, Path) or not isinstance(crop, tuple):
        raise TypeError("Konfigurasi crop tidak valid")

    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image).convert("RGB")
        image = image.crop(crop).resize(TARGET_SIZE, Image.Resampling.LANCZOS)
        image.save(output, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"{output.name}: {image.size[0]}x{image.size[1]}")


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for job in JOBS:
        export_crop(job)


if __name__ == "__main__":
    main()

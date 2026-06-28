Add-Type -AssemblyName System.Drawing

$src = Join-Path $PSScriptRoot "..\public\logo.png"
$outDir = Join-Path $PSScriptRoot "..\public"
$bitmap = [System.Drawing.Bitmap]::FromFile($src)
$width = $bitmap.Width
$height = $bitmap.Height
$minX = $width
$minY = $height
$maxX = 0
$maxY = 0

for ($x = 0; $x -lt $width; $x += 2) {
  for ($y = 0; $y -lt $height; $y += 2) {
    $pixel = $bitmap.GetPixel($x, $y)
    if ($pixel.R -lt 245 -or $pixel.G -lt 245 -or $pixel.B -lt 245) {
      if ($x -lt $minX) { $minX = $x }
      if ($y -lt $minY) { $minY = $y }
      if ($x -gt $maxX) { $maxX = $x }
      if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

$pad = [Math]::Max(8, [Math]::Round(($maxX - $minX) * 0.04))
$minX = [Math]::Max(0, $minX - $pad)
$minY = [Math]::Max(0, $minY - $pad)
$cropW = [Math]::Min($width - $minX, ($maxX - $minX + 1) + ($pad * 2))
$cropH = [Math]::Min($height - $minY, ($maxY - $minY + 1) + ($pad * 2))

$cropped = New-Object System.Drawing.Bitmap $cropW, $cropH
$graphics = [System.Drawing.Graphics]::FromImage($cropped)
$graphics.Clear([System.Drawing.Color]::White)
$srcRect = New-Object System.Drawing.Rectangle $minX, $minY, $cropW, $cropH
$graphics.DrawImage($bitmap, 0, 0, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$graphics.Dispose()

$croppedPath = Join-Path $outDir "logo-cropped.png"
$cropped.Save($croppedPath, [System.Drawing.Imaging.ImageFormat]::Png)

foreach ($size in @(32, 180)) {
  $icon = New-Object System.Drawing.Bitmap $size, $size
  $g = [System.Drawing.Graphics]::FromImage($icon)
  $g.Clear([System.Drawing.Color]::White)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $margin = [Math]::Round($size * 0.08)
  $drawSize = $size - ($margin * 2)
  $ratio = [Math]::Min($drawSize / $cropW, $drawSize / $cropH)
  $drawW = [Math]::Round($cropW * $ratio)
  $drawH = [Math]::Round($cropH * $ratio)
  $offsetX = [Math]::Round(($size - $drawW) / 2)
  $offsetY = [Math]::Round(($size - $drawH) / 2)
  $g.DrawImage($cropped, $offsetX, $offsetY, $drawW, $drawH)
  $g.Dispose()

  if ($size -eq 32) {
    $icon.Save((Join-Path $outDir "favicon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  } else {
    $icon.Save((Join-Path $outDir "apple-touch-icon.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  }
  $icon.Dispose()
}

$cropped.Dispose()
$bitmap.Dispose()
Write-Output "Done"

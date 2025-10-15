# ============================================
# Balasana Next.js - Add Logo Script
# ============================================

Write-Host "`n=== Logo Setup ===" -ForegroundColor Cyan

# Check common locations for the logo
$possibleLocations = @(
    "$env:USERPROFILE\Downloads\balasana-logo.png",
    "$env:USERPROFILE\Desktop\balasana-logo.png",
    "K:\Business\Supplement\webdesign\assets\logos\balasana-logo.png"
)

$logoFound = $false
foreach ($location in $possibleLocations) {
    if (Test-Path $location) {
        Write-Host "✓ Found logo at: $location" -ForegroundColor Green
        Copy-Item $location ".\public\balasana-logo.png" -Force
        Write-Host "✓ Copied to public folder" -ForegroundColor Green
        $logoFound = $true
        break
    }
}

if (-not $logoFound) {
    Write-Host "⚠ Logo not found in common locations" -ForegroundColor Yellow
    Write-Host "`nPlease manually copy your logo:" -ForegroundColor Cyan
    Write-Host "  From: [Your logo location]" -ForegroundColor White
    Write-Host "  To:   $PWD\public\balasana-logo.png" -ForegroundColor Yellow
    
    Write-Host "`nOr enter the full path to your logo file:" -ForegroundColor Cyan
    $logoPath = Read-Host "Logo path (or press Enter to skip)"
    
    if ($logoPath -and (Test-Path $logoPath)) {
        Copy-Item $logoPath ".\public\balasana-logo.png" -Force
        Write-Host "✓ Logo copied successfully!" -ForegroundColor Green
    }
}

Write-Host "`n✓ Logo setup complete!`n" -ForegroundColor Green
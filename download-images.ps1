# Download food images for menu

# Create assets directory if it doesn't exist
$assetsDir = "c:\Users\NoroBeno\Desktop\mabina-seafood\src\assets"
if (!(Test-Path $assetsDir)) {
    New-Item -ItemType Directory -Path $assetsDir -Force
}

# Download grilled shrimp image
$shrimpUrl = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80"
$shrimpPath = "$assetsDir\grilled-shrimp.jpg"
Invoke-WebRequest -Uri $shrimpUrl -OutFile $shrimpPath
Write-Host "Downloaded: grilled-shrimp.jpg"

# Download lobster image
$lobsterUrl = "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80"
$lobsterPath = "$assetsDir\lobster.jpg"
Invoke-WebRequest -Uri $lobsterUrl -OutFile $lobsterPath
Write-Host "Downloaded: lobster.jpg"

# Download fish fillet image
$fishUrl = "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=800&q=80"
$fishPath = "$assetsDir\fish-fillet.jpg"
Invoke-WebRequest -Uri $fishUrl -OutFile $fishPath
Write-Host "Downloaded: fish-fillet.jpg"

# Download pasta image
$pastaUrl = "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800&q=80"
$pastaPath = "$assetsDir\pasta.jpg"
Invoke-WebRequest -Uri $pastaUrl -OutFile $pastaPath
Write-Host "Downloaded: pasta.jpg"

# Download salad image
$saladUrl = "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80"
$saladPath = "$assetsDir\salad.jpg"
Invoke-WebRequest -Uri $saladUrl -OutFile $saladPath
Write-Host "Downloaded: salad.jpg"

# Download coffee image
$coffeeUrl = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80"
$coffeePath = "$assetsDir\coffee.jpg"
Invoke-WebRequest -Uri $coffeeUrl -OutFile $coffeePath
Write-Host "Downloaded: coffee.jpg"

# Download juice image
$juiceUrl = "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=800&q=80"
$juicePath = "$assetsDir\juice.jpg"
Invoke-WebRequest -Uri $juiceUrl -OutFile $juicePath
Write-Host "Downloaded: juice.jpg"

# Download breakfast image
$breakfastUrl = "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80"
$breakfastPath = "$assetsDir\breakfast.jpg"
Invoke-WebRequest -Uri $breakfastUrl -OutFile $breakfastPath
Write-Host "Downloaded: breakfast.jpg"

Write-Host "All images downloaded successfully!"
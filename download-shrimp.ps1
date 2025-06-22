# Download grilled shrimp image
$shrimpUrl = "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&q=80"
$shrimpPath = "c:\Users\NoroBeno\Desktop\mabina-seafood\src\assets\grilled-shrimp.jpg"
Invoke-WebRequest -Uri $shrimpUrl -OutFile $shrimpPath
Write-Host "Downloaded: grilled-shrimp.jpg"
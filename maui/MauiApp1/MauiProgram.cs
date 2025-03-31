using Microsoft.Extensions.Logging;

/**
目标平台	正确命令	输出文件
Android (APK)	dotnet build -c Release -f net8.0-android	.apk
Android (AAB)	dotnet publish -c Release -f net8.0-android /p:AndroidPackageFormat=aab	.aab
Windows (exe)	dotnet publish -c Release -f net8.0-windows10.0.19041.0 -r win-x64	/p:PublishSingleFile=true .exe

*/
namespace MauiApp1
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                });

            builder.Services.AddMauiBlazorWebView();

#if DEBUG
    		builder.Services.AddBlazorWebViewDeveloperTools();
    		builder.Logging.AddDebug();
#endif

            return builder.Build();
        }
    }
}

namespace emadfawzi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            var app = builder.Build();

            // تفعيل الملفات الثابتة (مثل HTML و CSS و JavaScript)
            app.UseDefaultFiles();
            app.UseStaticFiles();

            app.Run();
        }
    }
}
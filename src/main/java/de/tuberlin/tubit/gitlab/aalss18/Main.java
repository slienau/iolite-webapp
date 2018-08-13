package de.tuberlin.tubit.gitlab.aalss18;

public class Main {
    public static void main(String[] args) throws Exception {
        Class.forName("org.postgresql.Driver");
        App.startServer();
    }
}

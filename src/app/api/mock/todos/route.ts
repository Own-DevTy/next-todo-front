interface todo {
    id: number;
    todo: string;
    updated_at: string | null;
    created_at: string;
    is_succeed: boolean;
}

var id = 0;
var todos: todo[] = [
    {
        id: ++id,
        todo: "해치웠나?",
        updated_at: null,
        created_at: Date.now().toString(),
        is_succeed: true
    },
    {
        id: ++id,
        todo: "해치우셨나?",
        updated_at: null,
        created_at: Date.now().toString(),
        is_succeed: false
    },
    {
        id: ++id,
        todo: "이제는 진짜 해치웠나??",
        updated_at: Date.now().toString(),
        created_at: Date.now().toString(),
        is_succeed: false
    },
]

export async function GET() {
    return new Response(
        JSON.stringify({
            status: 200,
            todos: todos
        }),
    )
}
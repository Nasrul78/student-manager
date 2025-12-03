<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Rule;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|max:64',
            'email' => 'required|email|unique:students',
            'phone' => 'nullable|numeric',
            'dob' => 'nullable|date',
            'gender' => 'nullable|in:male,female',
            'address' => 'nullable|string',
        ]);

        $student = Student::create($validated);

        return $student;
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        return $student;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student)
    {
        $validated = $request->validate([
            'name' => 'required|max:64',
            'email' => [
                'required',
                'email',
                Rule::unique('users')->ignore($student->id),
            ],
            'phone' => 'nullable|numeric',
            'dob' => 'nullable|date',
            'gender' => 'nullable|in:male,female',
            'address' => 'nullable|string',
        ]);

        $student->update($validated);

        return $student;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $student->delete();

        return [ 'message' => 'Student deleted successfully' ];
    }
}
